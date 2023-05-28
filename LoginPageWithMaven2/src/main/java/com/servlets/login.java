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

public class login extends HttpServlet {

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		PrintWriter out = res.getWriter();
		
		String check = req.getParameter("check");
		String tier = req.getParameter("rate");
		boolean x = false, y=false;
		try {
			if(check.equals("checked")) {
				x=true;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			out.println("You have not agreed to terms and Conditions !!!");
		}
		if(!tier.equals("Select")) {
			y=true;
		}
		else {
			out.println("You have not rated the project");
		}
		
		
		if(x==true && y==true) {
		try {
			Configuration cfg = new Configuration();
			cfg.configure("hibernate.cfg.xml");
			SessionFactory factory = cfg.buildSessionFactory();

			String q = "FROM Login";
			Session session = factory.openSession();
			Transaction ts = session.beginTransaction();
			
			Query<Login> query = session.createQuery(q, Login.class);
			List<Login> list = query.getResultList();
			
			
			ts.commit();
			session.close();
			factory.close();
			
			
			for (int i = 0; i < list.size(); i++) {
				out.println(list.get(i).getId()
						+" "+ list.get(i).getUsername() + "    " + list.get(i).getPassword());
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			out.println("Error occurred during Fetching Results From Database");
		}
		
		
	}	

	}

}
