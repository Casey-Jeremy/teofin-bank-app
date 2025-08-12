import { ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { router } from "expo-router";
import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const NewPassword = ({navigation}) => {
  const renderHeader = () => {
    return <components.Header title="New password" goBack={true} />;
  };

  const renderContent = () => {
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            ...theme.FONTS.Mulish_400Regular,
            fontSize: 16,
            color: theme.COLORS.bodyTextColor,
            lineHeight: 16 * 1.7,
            marginBottom: 20,
            marginTop: 30,
          }}
        >
          Enter new password and confirm.
        </Text>
        <components.InputField
          placeholder="••••••••"
          containerStyle={{marginBottom: 10}}
          icon={
            <TouchableOpacity>
              <svg.EyeOffSvg />
            </TouchableOpacity>
          }
        />
        <components.InputField
          placeholder="••••••••"
          containerStyle={{marginBottom: 14}}
          icon={
            <TouchableOpacity>
              <svg.EyeOffSvg />
            </TouchableOpacity>
          }
        />
        <components.Button
          title="Change Password"
          onPress={() => router.push("ForgotPasswordSentEmail")}
        />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.bgColor}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
};

export default NewPassword;
