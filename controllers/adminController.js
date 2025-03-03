const db = require('../models')
const User = db.User
const Reply = db.Reply
const Like = db.Like
const Tweet = db.Tweet

const { sequelize } = require('../models')
const bcrypt = require('bcryptjs')

// JWT
const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const adminController = {
  // 後台登入
  adminLogIn: async (req, res) => {
    try {
      const { email, password } = req.body
      // 檢查是否輸入帳號密碼
      if (!email || !password) {
        return res.json({
          status: 'error',
          message: 'All fields are required.',
        })
      }
      // 確認使用者資料
      const user = await User.findOne({ where: { email } })
      // 檢查前台登入權限
      if (user.role === 'user') {
        return res.status(401).json({
          status: 'error',
          message: 'User can only login to frontend.',
        })
      }
      // 無此使用者
      if (!user) {
        return res
          .status(401)
          .json({ status: 'error', message: 'User does not exist.' })
      }
      // 檢查密碼是否正確
      if (!bcrypt.compareSync(password, user.password)) {
        return res
          .status(401)
          .json({ status: 'error', message: 'Incorrect password.' })
      }

      // 簽發 token
      const payload = { id: user.id }
      const token = jwt.sign(payload, process.env.JWT_SECRET)
      return res.json({
        status: 'success',
        message: 'Login successful.',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          account: user.account,
          introduction: user.introduction,
          role: user.role,
        },
      })
    } catch (err) {
      const data = { status: 'error', message: err }
      return res.json(data)
    }
  },
  // 後台：取得所有使用者資料
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll({
        where: { role: 'user' },
        attributes: [
          'id',
          'name',
          'account',
          'avatar',
          'role',
          'cover',
          'followerCount',
          'followingCount',
          'tweetCount',
          [
            sequelize.literal(
              '(SELECT COUNT(*) FROM Replies WHERE Replies.UserId = User.id)'
            ),
            'replyCount',
          ],
          [
            sequelize.literal(
              '(SELECT COUNT(*) FROM Likes WHERE Likes.UserId = User.id)'
            ),
            'likeCount',
          ],
        ],
        order: [['TweetCount', 'DESC']],
      })
      res.status(200).json(users)
    } catch (err) {
      const data = { status: 'error', message: err }
      return res.json(data)
    }
  },
  // 後台：刪除單一 tweet
  deleteTweet: async (req, res) => {
    try {
      const tweet = await Tweet.findByPk(req.params.id)
      if (!tweet) {
        return res.json({
          status: 'error',
          message: `Tweet does not exist.`,
        })
      }
      tweet.destroy()

      // 將 user 的 tweetCount - 1  (tweet.dataValues.UserId)
      const user = await User.findByPk(tweet.dataValues.UserId)
      await user.decrement(['tweetCount'], { by: 1 })

      // 將 like 有此筆 tweet 刪掉
      const likedTweets = await Like.findAll({
        where: { TweetId: tweet.dataValues.id },
      })
      likedTweets.map((d) => {
        Like.findByPk(d.dataValues.id)
        d.destroy()
      })

      // 將 reply 有此筆 tweet 狀況刪掉
      const repliedTweets = await Reply.findAll({
        where: { TweetId: tweet.dataValues.id },
      })
      repliedTweets.map((d) => {
        Reply.findByPk(d.dataValues.id)
        d.destroy()
      })

      return res.status(200).json({
        status: 'success',
        message: `Tweet id: ${tweet.id} is deleted.`,
      })
    } catch (err) {
      const data = { status: 'error', message: err }
      return res.json(data)
    }
  },
}

module.exports = adminController
