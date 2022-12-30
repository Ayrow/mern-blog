import express from 'express';
import {
  registerUser,
  loginUser,
  deleteUser,
  updateUser,
} from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/updateUser').patch(updateUser);
router.route('/deleteUser').delete(deleteUser);

export default router;
