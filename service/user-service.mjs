import User from "../models/users.mjs"

class UserService {

    async getAll  () {
        return User.find()
    }

    async delete (user){
        return User.findByIdAndDelete(user.id)
    }

    async create (user) {
        const newUser = new User({
            firstName: user.firstName,
            lastName: user.lastName
        })

        return newUser.save()
    }

    async update (user)  {
        const filter = {_id: user.id}
        
        return User.findOneAndUpdate(filter, user, {
            new: true 
        })
    }

}

export default UserService