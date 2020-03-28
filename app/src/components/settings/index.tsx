import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { PersistorContext } from "entry";
import ThemeSelect from "components/settings/theme-select";
import LanguageSelect from "components/settings/language-select";
import ImportExport from "components/settings/import-export";
import Button, { ButtonVariant } from "components/button";
import Icon from "components/icon";

const Settings: React.FC<Props> = memo(() => {
  const { t } = useTranslation();
  return (
    <PersistorContext.Consumer>
      {purgeStore => (
        <>
          <div className="mb-6">
            <h3 className="text-3 font-semibold">{t("theme.headline")}</h3>
            <ThemeSelect />
          </div>

          <div className="mb-6">
            <h3 className="text-3 font-semibold">{t("language.headline")}</h3>
            <LanguageSelect />
          </div>

          <div className="mb-6">
            <h3 className="text-3 font-semibold">{t("data.purge")}</h3>
            <Button
              className="m-4"
              outline
              variant={ButtonVariant.Danger}
              onClick={purgeStore}
            >
              <Icon name="trash" position="left" />
              {t("data.purge")}
            </Button>
          </div>

          <div>
            <h3 className="text-3 font-semibold">{t("data.backup")}</h3>
            <ImportExport />
          </div>
        </>
      )}
    </PersistorContext.Consumer>
  );
});

export interface Props {
  //
}

export default Settings;