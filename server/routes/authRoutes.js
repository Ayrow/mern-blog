import express from 'express';
import {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
} from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/registerUser').post(registerUser);
router.route('/loginUser').post(loginUser);
router.route('/updateUser').patch(updateUser);
router.route('/deleteUser').delete(deleteUser);

export default router;
