import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "KartVerse. - Store Dashboard",
    description: "KartVerse. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
