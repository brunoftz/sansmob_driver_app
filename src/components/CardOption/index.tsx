import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { s } from './style';

interface CardOptionProps {
  label: string;
  onPress?: () => void;
  locked?: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
  iconComponent?: React.ComponentType<any>;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
}

export function CardOption({
  label,
  onPress,
  locked = false,
  style,
  labelStyle,
  iconComponent: IconComponent,
  iconName,
  iconColor = '#0056FF',
  iconSize = 28,
}: CardOptionProps) {
  return (
    <TouchableOpacity
      style={[s.card, style]}
      onPress={onPress}
      activeOpacity={locked ? 1 : 0.7}
      disabled={locked}
    >
      <Text style={[s.label, labelStyle]}>{label}</Text>
      {IconComponent && iconName && (
        <IconComponent name={iconName} size={iconSize} color={iconColor} />
      )}
    </TouchableOpacity>
  );
}
