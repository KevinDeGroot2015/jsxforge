export const WelcomeDescription = (
    <>
        <section className="py-2">
            <h3 className="font-bold mb-4 text-gray-900">What is JSXForge?</h3>
            <p className="text-gray-700 leading-relaxed">
                Mainly built for myself Kevin de Groot, created with:
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>ReactJS</li>
                    <li>Typescript</li>
                    <li>React router dom</li>
                    <li>Tailwind</li>
                </ul>
                <br />
                I was tired of looking up in the React.dev documentation how to
                construct a useContext template for example, so I decided to
                build a tool that contains basic UI components but also complex
                component interactions.
                <br />
                <br />I wanted this site to function as my personal portfolio,
                so I can show my work to others made by and made for React.
            </p>
        </section>
    </>
);

export const AboutDescription = (
    <section>
        <p className="text-gray-700 mb-6 leading-relaxed">
            JSXForge is a free, web-based tool that helps you generate React
            components in seconds — no setup or boilerplate required.
            <br />
            Whether you're a seasoned developer looking to save time or a
            beginner learning how React components work, JSXForge provides a
            fast and simple way to create reusable UI blocks with clean,
            export-ready JSX and TypeScript code.
        </p>

        <h3 className="font-semibold mb-4 text-gray-800">
            Why i built JSXForge
        </h3>
        <p className="text-gray-700 mb-6">
            Writing React components from scratch can be repetitive and
            time-consuming, especially when setting up props, types, and
            structure.
            <br /> JSXForge was built to automate that process and make
            component development more accessible — without compromising code
            quality.
        </p>

        <h3 className="font-semibold mb-4 text-gray-800">Who it's for</h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>
                <strong>For everyone</strong> initially for myself, but also
                free for everyone who want to speed up scaffolding
            </li>
        </ul>

        <h3 className="font-semibold mb-4 text-gray-800">Features</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Generate functional React components with props</li>
            <li>Support for TypeScript typing</li>
            <li>Instant code preview and copy</li>
            <li>Clean, minimalist interface</li>
            <li>Free and open to everyone</li>
        </ul>

        <h3 className="font-semibold mt-10 mb-4 text-gray-800">
            Built for Speed and Simplicity
        </h3>
        <p className="text-gray-700 mb-6">
            We believe that tools should get out of your way and help you move
            faster. <br />
            JSXForge focuses on just one thing — helping you create functional,
            well-typed React components — and does it with speed and clarity.
        </p>

        <p className="text-gray-700">
            Got feedback or feature ideas?{" "}
            <a href="mailto:kevinvdbijl@gmail.com">Contact me</a>
        </p>
    </section>
);

export const privacyPolicyDescription = (
    <>
        <section className="mb-5">
            <h3 className="font-semibold mb-4">1. Information We Collect</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <strong>Personal Information:</strong> Name, email address,
                    company name, and contact details.
                </li>
                <li>
                    <strong>Usage Data:</strong> IP address, browser type, pages
                    visited, and interaction history.
                </li>
                <li>
                    <strong>Cookies & Tracking:</strong> For analytics and
                    functionality improvements.
                </li>
            </ul>
        </section>

        <section className="mb-5">
            <h3 className="font-semibold mb-4">
                2. How We Use Your Information
            </h3>
            <ul className="list-disc list-inside space-y-2">
                <li>To deliver and improve our services</li>
                <li>
                    To communicate with you, including updates and marketing
                </li>
                <li>To analyze usage and improve functionality</li>
                <li>To ensure security and prevent abuse</li>
            </ul>
        </section>

        <section className="mb-5">
            <h3 className="font-semibold mb-4">3. Sharing Your Information</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    We do <strong>not</strong> sell your personal information.
                </li>
                <li>We may share data with trusted service providers.</li>
                <li>Legal disclosures if required by law.</li>
                <li>In the case of mergers or acquisitions.</li>
            </ul>
        </section>

        <section className="mb-5">
            <h3 className="font-semibold mb-4">4. Your Rights and Choices</h3>
            <p>
                You may have rights to access, update, delete, or restrict the
                use of your personal data.
            </p>
        </section>

        <section className="mb-5">
            <h3 className="font-semibold mb-4">5. Data Retention</h3>
            <p>
                We retain personal data only as long as necessary to fulfill the
                purposes described in this policy or as required by law.
            </p>
        </section>

        <section className="mb-5">
            <h3 className="font-semibold mb-4">6. Security</h3>
            <p>
                We use industry-standard measures to safeguard your data, but no
                system is completely secure.
            </p>
        </section>

        <section className="mb-5">
            <h3 className="font-semibold mb-4">7. Children’s Privacy</h3>
            <p>
                Our services are not directed to children under 13. We do not
                knowingly collect data from children.
            </p>
        </section>

        <section className="mb-5">
            <h3 className="font-semibold mb-4">8. Third-Party Links</h3>
            <p>
                We may link to external sites. We are not responsible for their
                privacy practices or content.
            </p>
        </section>

        <section className="mb-5">
            <h3 className="font-semibold mb-4">9. Changes to This Policy</h3>
            <p>
                We may update this Privacy Policy. Revisions will be posted on
                this page with an updated effective date.
            </p>
        </section>

        {/* <section>
            <h3 className="font-semibold mb-4">10. Contact Us</h3>
            <p>If you have any questions, contact us at:</p>
            <ul className="list-inside mt-2">
                <li>
                    Email: 
                    <a
                        href="mailto:[kevinvdbijl@gmail.com]"
                        className="text-blue-600 underline"
                    >
                        [kevinvdbijl@gmail.com]
                    </a>
                </li>
                <li>
                    Website:{" "}
                    <a
                        href="https://jsxforge.com"
                        className="text-blue-600 underline"
                    >
                        https://jsxforge.com
                    </a>
                </li>
            </ul>
        </section> */}
    </>
);
