import Category from "../components/Category";

export default function Speakers({ navigation }: any): JSX.Element {
    return (
        <Category cat={'speakers'} navigation={navigation} />
    );
}