import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { KcPage } from "./kc.gen";

// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase
import { getKcContextMock } from "./login/KcPageStory";

if (import.meta.env.DEV) {
    const pageId =
        (new URLSearchParams(window.location.search).get("pageId") as any) || "login.ftl";

    window.kcContext = getKcContextMock({
        pageId,
        overrides: {
            url: {
                loginUrl: "?pageId=login.ftl",
                registrationUrl: "?pageId=register.ftl",
                resetPasswordUrl: "?pageId=login-reset-password.ftl",
                verifyEmailUrl: "?pageId=login-verify-email.ftl"
            },
            realm: {
                displayName: "SotaUni",
                registrationAllowed: true,
                registrationEmailAsUsername: true,
                rememberMe: false
            }
        } as any
    });
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {!window.kcContext ? (
            <h1>No Keycloak Context</h1>
        ) : (
            <KcPage kcContext={window.kcContext} />
        )}
    </StrictMode>
);
