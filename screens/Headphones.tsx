import Category from "../components/Category";

export default function Headphones({ navigation }: any): JSX.Element {
    return (
        <Category cat={'headphones'} navigation={navigation} />
    );
}