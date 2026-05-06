import messages from "keycloakify/login/i18n/messages_defaultSet/en";
import { viCommonMessages } from "../common/vi";

export const viMessages = {
    ...messages,
    ...viCommonMessages,
    emailVerifyTitle: "Chào mừng đến với {0}",
    emailVerifyAccountTitle: "Tạo tài khoản thành công!",
    emailVerify1: "Chúng tôi đã gửi liên kết xác thực đến",
    emailVerify2: "Vui lòng kiểm tra email và nhấp vào liên kết để kích hoạt tài khoản.",
    emailVerify3: "Chưa nhận được email?",
    doClickHere: "Gửi lại",
    backToLogin: "Quay lại đăng nhập"
};
