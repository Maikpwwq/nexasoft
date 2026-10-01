import { component$ } from "@builder.io/qwik";
import Nexo from "~/components/nexo/nexo";
import styles from "~/components/modular-forms/modularForm.module.css";
import Infobox from "~/components/starter/infobox/infobox";

export default component$(() => {
    return (
        <div id="contact-section" class="container container-flex contactBox w-full flex justify-center py-8">
            <div
                class={[
                    styles.contactCard,
                    "rounded-[33px] border border-[#ac7ff4] bg-[#0f0a28] my-4 mx-2 sm:mx-auto max-w-lg w-full shadow-2xl p-2 sm:p-4",
                ]}
            >
                <Infobox>
                    <>
                        <Nexo />
                    </>
                </Infobox>
            </div>
        </div>
    );
});
