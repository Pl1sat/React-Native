import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { Suspense } from "react";
import { AntDesign } from "@expo/vector-icons";
import UserAssestItem from "../components/UserAssestItem";
import { useRecoilState } from "recoil";
import { userAsset } from "../atom/UserAssets";
import AssetModal from "../components/AssetModal";

const UserScreen = () => { 
  const [asset, setAsset] = useRecoilState(userAsset);
  
  const LoadingFallback = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );

  const Header = () => (
    <View>
      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceAmount}>$30986</Text>
          <Text style={styles.changeText}>% change</Text>
        </View>
        <View style={styles.percentageContainer}>
          <AntDesign
            name="caretup"
            size={14}
            color="white"
            style={styles.icon}
          />
          <Text style={styles.percentageText}>1.24%</Text>
        </View>
      </View>
      <View style={styles.assetsHeaderContainer}>
        <Text style={styles.assetsHeaderText}>Your Assets</Text>
      </View>
    </View>
  );

  const Footer = () => (
    <View style={styles.footerContainer}>
      <AssetModal />
    </View>
  );

  return (
    <Suspense fallback={<LoadingFallback />}>
      <View style={styles.container}>
        <FlatList
          data={asset}
          renderItem={({ item }) => <UserAssestItem asset={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<Header />}
          ListFooterComponent={<Footer />}
        />
      </View>
    </Suspense>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  loadingContainer: {
    marginTop: 96,
    alignItems: 'center',
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 12,
    marginBottom: 8,
  },
  balanceLabel: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  balanceAmount: {
    color: 'white',
    fontWeight: '900',
    fontSize: 24,
    letterSpacing: 0.5,
  },
  changeText: {
    color: '#34d399',
    fontWeight: '600',
    fontSize: 16,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    borderRadius: 4,
    backgroundColor: '#34d399',
  },
  icon: {
    marginRight: 4,
  },
  percentageText: {
    color: 'white',
    fontWeight: '600',
  },
  assetsHeaderContainer: {
    marginHorizontal: 10,
  },
  assetsHeaderText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  footerContainer: {
    marginTop: 128,
    marginHorizontal: 14,
  },
});

export default UserScreen;