import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "KartVerse. - Admin",
    description: "KartVerse. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
