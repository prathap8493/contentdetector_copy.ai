import { Global } from "@emotion/react";
import React from "react";

function MantineGlobalStyles() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "nunito",
            src: `url("../../assests/fonts/nunito/NunitoSans-ExtraBold.ttf")`,
            fontWeight: 900,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "nunito",
            src: `url("../../assests/fonts/nunito/NunitoSans-Regular.ttf")`,
            fontWeight: normal,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "nunito",
            src: `url("../../assests/fonts/nunito/NunitoSans-Black.ttf")`,
            fontWeight: 800,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}

export default MantineGlobalStyles;
