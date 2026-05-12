import messages from "keycloakify/login/i18n/messages_defaultSet/en";
import { viCommonMessages } from "../common/vi";

export const viMessages = {
    ...messages,
    ...viCommonMessages,
    doForgotPassword: "Quên mật khẩu?",
    email: 'Email <span class="label-required">*</span>',
    password: 'Mật khẩu <span class="label-required">*</span>',
    doLogIn: "Đăng nhập",
    doRegister: "Đăng ký",
    noAccount: "Chưa có tài khoản?",
    loginTitle: "Chào mừng đến với {0}",
    loginAccountTitle: "Chào mừng đến với SotaUni",
    loginDescription: "Tiếp tục hành trình học tập của bạn - Đăng nhập ngay.",
    restartLoginTooltip: "Khởi động lại đăng nhập",
    doTryAnotherWay: "Thử cách khác",
    signInWithGoogle: "Đăng nhập với Google",
    passwordNew: 'Mật khẩu mới <span class="label-required">*</span>',
    passwordConfirm: 'Xác nhận mật khẩu <span class="label-required">*</span>',
    logoutOtherSessions: "Đăng xuất khỏi các thiết bị khác",
    "email.placeholder": "Nhập email",
    "username.placeholder": "Nhập email",
    "password.placeholder": "Nhập mật khẩu",
    "password-new.placeholder": "Nhập mật khẩu mới",
    "password-confirm.placeholder": "Xác nhận mật khẩu"
};
