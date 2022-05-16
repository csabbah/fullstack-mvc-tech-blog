// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

// User.belongsToMany(Post, {
//   through: Post,
//   as: 'post',
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL',
// });

// Post.belongsToMany(User, {
//   through: User,
//   as: 'user',
//   foreignKey: 'id',
//   onDelete: 'SET NULL',
// });

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };
