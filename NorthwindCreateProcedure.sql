Create Procedure CustomerWiseGrossSale
As
Begin
	Select A.CustomerID,C.ContactName,D.ProductID,P.ProductName 
	,GrossAmount = Sum(D.UnitPrice * D.Quantity)
	from Orders A
	Left Outer Join Customers C on C.CustomerID = A.CustomerID 
	Left Outer Join [Order Details] D on D.OrderID = A.OrderID 
	Left Outer Join Products P on P.ProductID = D.ProductID 
	Group by A.CustomerID,C.ContactName,D.ProductID,P.ProductName 
End
