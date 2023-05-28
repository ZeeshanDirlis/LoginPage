package com.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.login.Login;

public class register extends HttpServlet {

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		PrintWriter out = res.getWriter();
		String email = req.getParameter("eInput2");
		String pass = req.getParameter("pInput2");
		String checkbox = req.getParameter("check2");
		boolean b = false;
		boolean x = false;
		try {
			if (checkbox.equals("checked")) {
				b = true;
			}
		} catch (Exception e) {
			e.printStackTrace();
			out.println("You have not agreed to terms and Conditions !!!!");
		}
		if (b == true) {
			try {
				Configuration cfg = new Configuration();
				cfg.configure("hibernate.cfg.xml");
				SessionFactory factory = cfg.buildSessionFactory();

				Login obj = new Login();
				obj.setUsername(email);
				obj.setPassword(pass);

				Session session = factory.openSession();
				Transaction ts = session.beginTransaction();
				session.save(obj);
				ts.commit();
				session.close();
				factory.close();
				x = true;
			} catch (Exception e) {
				e.printStackTrace();
				out.println("Error Occurred while making connection to the Database. Try Registering again !");
			}
		}
		if (x == true) {
			out.println(
					"You have successfully registered yourself. Now you can try loggin in to access dummy database entries");
		}

	}

}
