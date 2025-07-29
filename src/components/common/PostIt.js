"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./PostIt.module.css";

export default function PostIt({
  title,
  color = "#ffc",
  iconSrc,
  imageWidth,
  imageHeight,
  children,
}) {
  const [resolvedColor, setResolvedColor] = useState(color);

  useEffect(() => {
    if (color.startsWith("var(")) {
      const varName = color.match(/var\((--[^)]+)\)/)?.[1];
      if (varName) {
        const rootStyles = getComputedStyle(document.documentElement);
        const value = rootStyles.getPropertyValue(varName);
        if (value) {
          setResolvedColor(value.trim());
        }
      }
    } else {
      setResolvedColor(color);
    }
  }, [color]);

  return (
    <div
      className={styles.postItContainer}
      style={{ backgroundColor: resolvedColor }}
    >
      <h3>
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            width={imageWidth}
            height={imageHeight}
          />
        )}
        {title}
      </h3>

      <div className={styles.text}>{children}</div>
    </div>
  );
}
