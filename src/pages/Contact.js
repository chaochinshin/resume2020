import React from 'react';
function Contact () {
    return (         

        <main className="container">
        <section className="row">
         
            
            <form action="mailto:ChaoChinShin@gmail.com" method="post" enctype="text/plain" className="block form-horizontal">
              <h1 className="block-header">Contact Me</h1>
              <hr />
              <div className="form-group">
                <label for="name" className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="Name" placeholder="ChinShin Chao"/>
                </div>
              </div>
              <div className="form-group">
                <label for="email" className="col-sm-2 control-label">Cellphone</label>
                <div className="col-sm-10">
                  <input type="cellphone" className="form-control" id="email" placeholder="440-638-9873"/>
                </div>
              <div className="form-group">
                <label for="email" className="col-sm-2 control-label">Email</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="ChaoChinShin@gmail.com"/>
                </div>
              </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" for="msg">Message</label>
                <div className="col-sm-10">
                  <textarea id="msg" className="form-control" rows="3" placeholder="Please call me anytime.  I do not have voicemail but I will call you back."></textarea>
                </div>
              </div>
                  <button type="submit" className="col-sm-2 submit-btn">Submit</button>
            </form>
            
        
        </section>
      </main>

    )
}
export default Contact