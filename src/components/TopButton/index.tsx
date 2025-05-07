import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { s } from './style';

interface TopButtonProps {
  onPress: () => void;
  iconName?: string;
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export function TopButton({
  onPress,
  iconName = 'chevron-left',
  size = 52,
  color = '#fff',
  style,
}: TopButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[s.button, style]}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
}

