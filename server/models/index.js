const User = require('./User');

// const bcrypt = require('bcrypt');

// userSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true,
//     },
    
//     email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, "Please enter a valid email address"] },
//     password: { type: String, required: true},
//     savedBooks: [bookSchema],
//     },
//     {toJSON: {
//         virtuals: true,
//     },}
// )
// // salt and hashing password
// const saltRounds = 10;
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }
//     next();
// });

// userSchema.methods.usCorrect = async function (password) {
//     return bcrypt.compare(password, this.password);
// };
// userSchema.virtual('bookCount').get(function (){
//     return this.savedBooks.length;
// });
// const User = model('User', userSchema);
module.exports = { User };
