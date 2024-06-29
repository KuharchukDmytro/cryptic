import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

type SvgIconProps = ComponentPropsWithoutRef<'img'> & {
  size?: number;
  strokeColor?: string;
};

export const SvgIcon: React.FC<SvgIconProps> = ({
  src,
  color,
  strokeColor,
  size = 16,
  className,
  ...props
}) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    if (!src) {
      return;
    }

    fetch(src)
      .then(response => response.text())
      .then(data => {
        let validSvg = data;

        if (color) {
          if (validSvg.includes('fill=')) {
            validSvg = validSvg.replace(/fill=".*?"/g, `fill="${color}"`);
          } else {
            validSvg = validSvg.replace(/<svg/g, `<svg fill="${color}" `);
          }
        }

        if (strokeColor) {
          if (validSvg.includes('stroke=')) {
            validSvg = validSvg.replace(
              /stroke=".*?"/g,
              `stroke="${strokeColor}"`,
            );
          } else {
            validSvg = validSvg.replace(
              /<svg/g,
              `<svg stroke="${strokeColor}" `,
            );
          }
        }

        setSvgContent(`data:image/svg+xml,${encodeURIComponent(validSvg)}`);
      });
  }, [src, color, strokeColor]);

  return svgContent ? (
    <img
      src={svgContent}
      data-size={size}
      className={classnames(className, styles.svg_icon)}
      {...props}
    />
  ) : null;
};
