const Footer = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <span>Connect with us on social</span>
            <ul className="flex">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <span>Follow us on any of the social platform above</span>
          </div>
          <div>
            <a href="/">top</a>
          </div>
          <div>
            <label htmlFor="email"></label>
            <input type="text" id="email" placeholder="Email" />
            <button type="submit">submit</button>
          </div>
        </div>
        <div>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <div>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
