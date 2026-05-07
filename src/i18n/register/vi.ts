import messages from "keycloakify/login/i18n/messages_defaultSet/en";
import { viCommonMessages } from "../common/vi";

export const viMessages = {
    ...messages,
    ...viCommonMessages,
    doRegister: "Đăng ký",
    doLogIn: "Đăng nhập",
    username: "Tên người dùng",
    firstName: "Tên",
    lastName: "Họ",
    email: "Email",
    password: "Mật khẩu",
    passwordConfirm: "Xác nhận mật khẩu",
    alreadyHaveAccount: "Đã có tài khoản?",
    registerTitle: "Chào mừng đến với {0}",
    registerAccountTitle: "Đăng ký",
    registerDescription: "Tạo tài khoản mới để tham gia SotaUni",
    doTryAnotherWay: "Thử cách khác",
    "username.placeholder": "Nhập tên người dùng",
    "email.placeholder": "Nhập email",
    "firstName.placeholder": "Nhập tên",
    "lastName.placeholder": "Nhập họ",
    "password.placeholder": "Nhập mật khẩu",
    "password-confirm.placeholder": "Xác nhận mật khẩu",

    "error-user-attribute-required": "Đây là trường bắt buộc.",
    "error-pattern-no-match": "Định dạng không hợp lệ.",
    invalidEmailMessage: "Định dạng email không hợp lệ.",
    invalidPasswordConfirmMessage: "Mật khẩu xác nhận không khớp.",
    invalidPasswordMinLengthMessage: "Mật khẩu phải chứa từ 8 đến 50 ký tự.",
    invalidPasswordMaxLengthMessage: "Mật khẩu phải chứa từ 8 đến 50 ký tự.",
    emailExistsMessage: "Email đã tồn tại. Vui lòng đăng nhập hoặc sử dụng email khác."
};
