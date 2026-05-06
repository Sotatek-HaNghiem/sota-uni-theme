/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";
import { viMessages } from "../i18n/verify-email/vi";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withExtraLanguages({
        vi: {
            label: "Tiếng Việt"
        }
    } as any)
    .withCustomTranslations({
        en: viMessages,
        vi: viMessages
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
