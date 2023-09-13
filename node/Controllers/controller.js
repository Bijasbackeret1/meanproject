User= require('../models/user.model');


exports.user =(req, res) => {
    console.log(req.body);
    User.create(req.body)
        .then(user => {
            res.status(201).json({
                status: 'success',
                data: { user }
            });
        })
        .catch(err => {
            res.status(400).json({
                status: 'fail',
                message: err.message
            });
        });
};
exports.login =async (req, res) => {
    try{
    const user = await User.findOne({email: req.body.email, password:req.body.password});
    
    if(user){
        res.status(201).json({
            status: 'success',
            data: { user }
        });
    }else{
        res.status(204).json({
            status: 'success',
            data: null
        });
    }
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    } 
};

exports.userlist=async (req, res) => {
    
    const user = await User.find();
    res.status(201).json({
        status: 'success',
        data: { user }
    });
};
// 
// exports.userapproval =async (req, res) => {
//     const doc = await User.findOne({ _id:req.params.id} );
//     const approvedUser = await user.findByIdAndUpdate(req.params.id, {status:'active',password:doc.firstName+"2023"}, {new: true, runValidators: true});
//     res.status(201).json({
//         status: 'success',
//         data: { approvedUser }
//     });
// };



exports.userapproval =async (req, res) => {
    const doc = await User.findOne({ _id:req.params.id} );
    const active = await User.findByIdAndUpdate(req.params.id, {status:'active',password:doc.firstname+"#2021"}, {new: true, runValidators: true});
    res.status(201).json({
        status: 'success',
        data: { active }
    });
};



// async function getAllUsers() {
//   try {
//     const users = await User.find();
//     return users;
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     throw error;
//   }
// }


exports.getuser=async (req, res) => {
    const user = await User.find({_id:req.params.id});
    res.status(201).json({
        status: 'success',
        data: { user }
    });
};
exports.newdata =async (req, res) => {
    const newd = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    res.status(201).json({
        status: 'success',
        data: { newd }
    });
};


// // Usage example
// getAllUsers()
//   .then(users => {
//     console.log('User Data:');
//     console.log(users);
//   })
//   .catch(error => {
//     // Handle the error here
//   });

exports.userdelete =async (req, res) => {
    const deletee = await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null
    });
};


exports.pwdreset =async (req, res) => {
    const update = await User.findByIdAndUpdate(req.params.id, {password:req.body.password}, {new: true, runValidators: true});
    res.status(201).json({
        status: 'success',
        data: { update }
    });
};
// exports.Login=async (req, res) => {
    
//     const user = await User.find({_id:req.params.id});
//     res.status(201).json({
//         status: 'success',
//         data: { user }
//     });
// };
// exports.userEdit =async (req, res) => {
//     const editedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
//     res.status(201).json({
//         status: 'success',
//         data: { editedUser }
//     });
// };





