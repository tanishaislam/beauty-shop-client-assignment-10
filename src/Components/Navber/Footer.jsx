
const Footer = () => {
    return (
        <div className="bg-neutral">
                <footer className="footer p-10  text-neutral-content container mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                    <nav>
                        <header className="footer-title">Services</header> 
                        <a className="link link-hover">Food sel</a>
                        <a className="link link-hover">Cooking</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav> 
                    <nav>
                        <header className="footer-title">Company</header> 
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">food reviewer</a>
                        <a className="link link-hover">Press kit</a>
                    </nav> 
                    <nav>
                        <header className="footer-title">Legal</header> 
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
        </div>
    );
};

export default Footer;