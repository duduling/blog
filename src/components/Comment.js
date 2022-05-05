import React, { useEffect, useRef } from "react";
import { useColorMode } from "@docusaurus/theme-common";

function Comment() {
  const containerRef = useRef(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    (function () {
      const script = document.createElement("script");

      script.src = "https://utteranc.es/client.js";
      script.setAttribute("repo", "duduling/blog");
      script.setAttribute("issue-term", "title");
      script.setAttribute("label", "comment");
      script.setAttribute("theme", `github-${colorMode}`);
      script.crossOrigin = "anonymous";
      script.async = true;

      containerRef.current.appendChild(script);
    })();
  }, []);

  // #region - 현재 테마에 따른 utterances 테마 변경
  useEffect(() => {
    const utterancesFrameEl = document.querySelector(".utterances-frame");

    if (utterancesFrameEl) {
      utterancesFrameEl.src = utterancesFrameEl.src.replace(
        `github-${colorMode === "light" ? "dark" : "light"}`,
        `github-${colorMode}`
      );
    }
  }, [colorMode]);
  // #endregion

  return <div ref={containerRef} />;
}

export default Comment;
