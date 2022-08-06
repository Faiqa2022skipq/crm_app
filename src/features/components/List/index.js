import { useRoute } from "@react-navigation/native";
import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import CustomerInfo from "../../../components/CustomerInfo";
import { useCustomersListByRegion } from "../../hooks";

const CustomerList = () => {
  const { params } = useRoute();
  const region = useSelector((s) =>
    s.customer.list.regions
    .find((r) => r.id === params.regionId)
  );
  const customerList = useCustomersListByRegion(region);

  return (
    <View>
      {customerList && customerList.length > 0 ? (
        <View>
          <Text>Viewing Customers in {region.name} Region </Text>
          <FlatList
            data={customerList}
            renderItem={(data) => <CustomerInfo customer={data} />}
            keyExtractor={(data) => data.id}
          />
        </View>
      ) : (
        <View>
          <Text>No Customer data to Show!</Text>
        </View>
      )}
    </View>
  );
};

export default CustomerList;

