import { useRouter } from "expo-router";
import { useState } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

import { components } from "../components";
import { theme } from "../constants";
import { svg } from "../svg";

const SignIn = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    console.log("Signing in with:", { email, password, rememberMe });
    router.replace("./(tabs)/Dashboard");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.bgColor }}>
      {/* Changed StatusBar back to the translucent style */}
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingTop: theme.SIZES.height * 0.1 }}>
          <Text
            style={{
              textAlign: "center",
              ...theme.FONTS.H1,
              color: theme.COLORS.mainDark,
              marginBottom: 30,
            }}
          >
            Welcome to{"\n"}Teofin!
          </Text>
          <components.InputField
            placeholder="cristinawolf@mail.com"
            containerStyle={{ marginBottom: 14 }}
            icon={<svg.CheckSvg />}
            value={email}
            onChangeText={setEmail}
          />
          <components.InputField
            placeholder="••••••"
            secureTextEntry={!showPassword}
            containerStyle={{ marginBottom: 20 }}
            value={password}
            onChangeText={setPassword}
            icon={
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? <svg.EyeOnSvg /> : <svg.EyeOffSvg />}
              </TouchableOpacity>
            }
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View
                style={{
                  width: 16,
                  height: 16,
                  borderWidth: 1,
                  borderColor: rememberMe ? theme.COLORS.mainDark : "#868698",
                  borderRadius: 4,
                  marginRight: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {rememberMe && (
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 2,
                      backgroundColor: theme.COLORS.mainDark,
                    }}
                  />
                )}
              </View>
              <Text style={{ ...theme.FONTS.Mulish_400Regular, fontSize: 16 }}>
                Remember me
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/ForgotPassword")}>
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 14,
                  color: theme.COLORS.linkColor,
                }}
              >
                Lost your password?
              </Text>
            </TouchableOpacity>
          </View>
          <components.Button
            title="Sign in"
            onPress={handleSignIn}
            containerStyle={{ marginBottom: 30 }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 50,
              justifyContent: "center",
            }}
          >
            <Text style={{ ...theme.FONTS.Mulish_400Regular, fontSize: 16 }}>
              No account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/SignUp")}>
              <Text
                style={{
                  ...theme.FONTS.Mulish_400Regular,
                  fontSize: 16,
                  color: theme.COLORS.linkColor,
                }}
              >
                Register now
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ marginHorizontal: 7 }}>
              <svg.FacebookSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 7 }}>
              <svg.TwitterSvg />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginHorizontal: 7 }}>
              <svg.GoogleSvg />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;