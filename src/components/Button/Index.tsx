import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextStyle } from 'react-native';
import { s } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
  textStyle?: TextStyle;
}

export function Button({ title, textStyle, variant = 'primary', style, ...props }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        s.button, 
        variant === 'primary' ? s.primaryButton : s.secondaryButton,
        style
      ]} 
      {...props}
    >
      <Text style={[
        s.buttonText,
        variant === 'primary' ? s.primaryText : s.secondaryText,
        textStyle
      ]}
      {...props}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
