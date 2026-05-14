/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";
import { enMessages } from "../i18n/reset-password/en";
import { viMessages } from "../i18n/reset-password/vi";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withExtraLanguages({
        vi: {
            label: "Tiếng Việt"
        }
    } as any)
    .withCustomTranslations({
        en: enMessages,
        vi: viMessages
    })
    .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
