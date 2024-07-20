function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/saikrishna.makkena.3/"
              className="me-4 text-reset"
            >
              <i className="fab fa-facebook-f">
                <img src="/im/fb.png" alt="" />
              </i>
            </a>
            <a
              href="https://www.instagram.com/saikrishna.makkena.3/"
              className="me-4 text-reset"
            >
              <i className="fab fa-instagram">
                <img src="/im/in.png" alt="" />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/mksai8/"
              className="me-4 text-reset"
            >
              <i className="fab fa-linkedin">
                <img src="/im/li.png" alt="" />
              </i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>MKSAI
                </h6>
                <p>
                  My name is Sai Krishna Alisa Mk. I love to create games and
                  apps and invent new things. If you liked this website, please
                  subscribe to{" "}
                  <a href="https://www.youtube.com/@mksai8933">my channel</a>.
                  If this website has helped you learn something, you can
                  support me by donating via the QR code. Your contribution will
                  help me create more projects like this. Thank you!
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <img src="/im/qr.png" width={"200px"} height={"260px"} alt="" />
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Narasaropet, Andhra
                  Pradesh, Indai
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  makkenasai33@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>
                  <a
                    href=" https://wa.me/917794843774"
                    style={{ textDecoration: "false" }}
                  >
                    whatsapp
                  </a>
                </p>

                <p>
                  <i className="fas fa-phone me-3"></i> + 91 7794843774
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2025 Copy-Past-rights :
          <a
            className="text-reset fw-bold"
            href="https://mkgames1.wordpress.com/"
          >
            mkgames1.wordpress.com
          </a>
        </div>
      </footer>
    </>
  );
}
export default Footer;
