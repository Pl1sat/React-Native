import { View, Text, Pressable, Modal, TextInput, ActivityIndicator, Alert, StyleSheet } from 'react-native'
import React, { useState, Suspense } from 'react'
import SearchableDropDown from 'react-native-searchable-dropdown';

const AssetModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState('');

  const LoadingFallback = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalBody}>
              <SearchableDropDown
                containerStyle={styles.dropdownContainer}
                itemStyle={styles.dropdownItem}
                itemTextStyle={styles.dropdownItemText}
                itemsContainerStyle={styles.dropdownItemsContainer}
                resetValue={false}
                items={[]}
                onItemSelect={(item) => console.log(item)}
                textInputProps={{
                  placeholder: "Enter a coin",
                  underlineColorAndroid: "transparent",
                  style: styles.searchInput,
                }}
              />

              <View style={styles.quantityContainer}>
                <TextInput
                  value={quantity}
                  placeholder="0"
                  style={styles.quantityInput}
                  keyboardType="numeric"
                  onChangeText={(text) => setQuantity(text)}
                />
                <Text style={styles.currencyText}>BTC</Text>
              </View>
              <Text style={styles.priceText}>
                $3000 per coin
              </Text>
              <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText}>
                  Add Asset
                </Text>
              </Pressable>
            </View>

            <Pressable 
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.closeButtonText}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.addButtonText}>
          Add New Asset
        </Text>
      </Pressable>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    marginTop: 96,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    marginTop: 128,
    marginHorizontal: 14,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
  },
  modalBody: {
    marginVertical: 16,
  },
  dropdownContainer: { 
    padding: 5, 
    width: "100%" 
  },
  dropdownItem: {
    padding: 10,
    marginTop: 2,
    backgroundColor: "#FAF9F8",
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 5,
  },
  dropdownItemText: {
    color: "#222",
  },
  dropdownItemsContainer: { 
    maxHeight: 140 
  },
  searchInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#FAF7F6",
  },
  quantityContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  quantityInput: {
    color: 'black',
    fontSize: 36,
  },
  currencyText: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 12,
  },
  priceText: {
    textAlign: 'center',
    color: '#4b5563',
    fontSize: 12,
    marginBottom: 40,
  },
  addButton: {
    backgroundColor: '#6366f1',
    borderRadius: 4,
  },
  addButtonText: {
    color: 'white',
    padding: 8,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#dc2626',
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AssetModal;