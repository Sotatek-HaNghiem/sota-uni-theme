import messages from "keycloakify/login/i18n/messages_defaultSet/en";
import { viCommonMessages } from "../common/vi";

export const viMessages = {
    ...messages,
    ...viCommonMessages,
    doSendResetLink: "Gửi liên kết đặt lại mật khẩu",
    backToLogin: "Quay lại đăng nhập",
    username: 'Email <span class="label-required">*</span>',
    doSubmit: "Gửi",
    resetPasswordTitle: "Chào mừng đến với {0}",
    resetPasswordAccountTitle: "Quên mật khẩu",
    resetPasswordDescription:
        "Một liên kết đặt lại mật khẩu sẽ được gửi đến địa chỉ email của bạn.",
    "email.placeholder": "Nhập email",
    "username.placeholder": "Nhập email"
};
