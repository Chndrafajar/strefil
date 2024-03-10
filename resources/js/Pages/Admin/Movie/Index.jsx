import React from "react";
import Autehnticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage }) {
    return (
        <>
            <Autehnticated auth={auth}>
                <Link href={route("admin.dashboard.movie.create")}>
                    <Button type="button" className="w-40 mb-8">
                        Insert New Movie
                    </Button>
                </Link>
                {flashMessage?.message && (
                    <FlashMessage message={flashMessage.message} />
                )}
            </Autehnticated>
        </>
    );
}
