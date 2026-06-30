import type { StyleProp, ViewStyle } from 'react-native';
import Svg, { Circle, G, Path } from 'react-native-svg';

export function MemuliWordmark({ color, style }: { color: string; style?: StyleProp<ViewStyle> }) {
  return (
    <Svg accessibilityLabel="Memuli" height="100%" style={style} viewBox="0 0 780 240" width="100%">
      <G>
        <Path
          d="M 52 188 V 86 A 34 34 0 0 1 120 86 V 188 M 120 86 A 34 34 0 0 1 188 86 V 188"
          fill="none"
          stroke="#7b3ff2"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={22}
        />
        <G transform="translate(232 52) rotate(-90 68 68)">
          <Path
            d="M 0 68 V 34 A 34 34 0 0 1 68 34 V 68 M 68 34 A 34 34 0 0 1 136 34 V 68"
            fill="none"
            stroke={color}
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={22}
          />
        </G>
        <Path
          d="M 344 188 V 154 A 34 34 0 0 1 412 154 V 188 M 412 154 A 34 34 0 0 1 480 154 V 188"
          fill="none"
          stroke="#7b3ff2"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={22}
        />
        <Path
          d="M 524 120 V 154 A 34 34 0 0 0 592 154 V 52 M 592 154 A 34 34 0 0 0 660 154 V 120"
          fill="none"
          stroke={color}
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={22}
        />
        <Circle cx={660} cy={52} fill="#7b3ff2" r={12} />
      </G>
    </Svg>
  );
}
