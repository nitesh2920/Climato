import type { PropsWithChildren } from "react";
import Header from "./header";

export function Layout({children}:PropsWithChildren){
    return (
        <div className="bg-gradient-to-br from-background to-muted">
            <Header/>
            <main className="min-h-screen container mx-auto px-4 py-8">
            {children}

            </main>
            <footer className="supports-[backdrop-filter]:bg-background/60 py-8 border-t">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>
                        Climato © {new Date().getFullYear()} - All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    )
}