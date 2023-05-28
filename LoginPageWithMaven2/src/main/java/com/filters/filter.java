package com.filters;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import com.login.Login;

public class filter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		PrintWriter out = res.getWriter();
		String name = req.getParameter("eInput");
		String pass = req.getParameter("pInput");
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
			
			ts.commit();
			session.close();
			factory.close();
			
			
			for (int i = 0; i < list.size(); i++) {
				if (list.get(i).getUsername().equals(name) && list.get(i).getPassword().equals(pass)) {
					b = true;
					break;
				}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			out.println("Error occurred during Authentication");
		}
		
		
		if (b == true) {
			chain.doFilter(req, res);
		} else {
			out.println("You have either put incorrect Username and Password or You are not a registered user");
		}

	}

}
