import { View, Image } from "react-native";
import LogoImage from "../../../assets/logo.png";
import { styles } from "./style";

export function Header() {
    return (
        <View
            style={styles.header}
        >
            <Image
                source={LogoImage}
                style={styles.logoImage}
            />
        </View>
    )
}