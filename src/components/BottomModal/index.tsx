import React, { ReactNode } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Colors from '../../constants/colors';

interface BottomModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
  showCloseButton?: boolean;
}

const BottomModal: React.FC<BottomModalProps> = ({
  isVisible,
  onClose,
  children,
  showCloseButton = true,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.bottomModal}
      backdropOpacity={0}
    >
      <View style={styles.modalContent}>
        {showCloseButton && (
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
        )}
        {children}
      </View>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    marginInline: 40,
    marginBottom:0
  },
  modalContent: {
    backgroundColor: Colors.bgDark,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingInline: 20,
    height: '50%',
    paddingBottom: 40,
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 58,
    marginBottom:0,
    width:30
  },

});
