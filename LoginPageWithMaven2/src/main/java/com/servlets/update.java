package com.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import com.login.Login;

public class update extends HttpServlet {

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException{
		PrintWriter out = res.getWriter();
		String name = req.getParameter("eInput");
		String pass = req.getParameter("pInput");
		Login loginObj =null;
		boolean b = false;
		try {
			Configuration cfg = new Configuration();
			cfg.configure("hibernate.cfg.xml");
			SessionFactory factory = cfg.buildSessionFactory();

			String q = "FROM Login";
			Session session = factory.openSession();
			Transaction ts = session.beginTransaction();
			
			Query<Login> query = session.createQuery(q, Login.class);
			List<Login> list = query.getResultList();
			
			
		
			
			
			
			for (int i = 0; i < list.size(); i++) {
				if(list.get(i).getUsername().equals(name)) {
					loginObj = list.get(i);
					b=true;
				}
			}
			
			loginObj.setPassword(pass);
			session.save(loginObj);
			ts.commit();
			session.close();
			factory.close();
			
			} catch (Exception e) {
			e.printStackTrace();
			out.println("Error occurred during Fetching Results From Database");
		}
		
		if(b==true) {
			out.println("Record has been updated successfully.");
		}
		else {
			out.println("No such record found in the database");
		}
	}
	
}
