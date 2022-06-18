--Crocodile Startup Database 
--Oscar Cruz and Ryan Luu 
--05/22/2022 

USE master; 
GO 

IF Exists(SELECT name FROM master.dbo.sysdatabases WHERE Name= 'CrocodileDB') 
	BEGIN 
		USE [master]; 

		ALTER DATABASE [CrocodileDB] SET Single_User With Rollback Immediate; 

		DROP DATABASE [CrocodileDB]; 
	END; 
GO 

 
CREATE DATABASE CrocodileDB 
GO 

USE CrocodileDB; 
GO 


-- Items Table 

CREATE TABLE [Item]( 
	[ItemKey]			 int IDENTITY		NOT NULL 
	,[Item_ID]			 int			NOT NULL 
	,[QR_Code]			 nvarchar(25)		NOT NULL					 
	,[Item_name]			 nvarchar(25)		NOT NULL 
        ,[Item_type]			 nvarchar(25)		NOT NULL 
        ,[Maker]			 nvarchar(25)		NOT NULL 
	,[Material]			 nvarchar(25)		NOT NULL 
        ,[Size_Dimension_Weight] 	 nvarchar(25)	
        ,[Condition]			 nvarchar(25)				 
        ,[Accesion_date]		 date			NOT NULL 
        ,[Collector]			 nvarchar(25)		NOT NULL 
        ,[Item_narrative]		 nvarchar(700)		NOT NULL	 
        ,[Provenance]			 nvarchar(700)				 
        ,[Cross_references]		 nvarchar(700)
	,[Image_url1]			 nvarchar(700)
	,[Image_url2]			 nvarchar(700)
	,[Image_url3]			 nvarchar(700)
	,[Image_url4]			 nvarchar(700)
	,[Video_url]			 nvarchar(700)
	PRIMARY KEY (ItemKey)); 


-- Inserting data to the item table
	INSERT INTO CrocodileDB.dbo.Item VALUES ('1', 'QRCode', 'Object_Name', 'Type', 'Maker', 'Material', 'Dimesions-or-size', 'Conditions', '04/10/1992', 'Collector', 'Narrative', 'Provenance', 'Cross_references','Image_url1','Image_url2','Image_url3','Image_url4','Video_url')
	--Examples
	INSERT INTO CrocodileDB.dbo.Item VALUES ('2', 'qrco.de/bcz1nk', 'Drum Stick Set', 'Object', 'Hard Rock', 'Wood', '1.2 lbs', 'Damaged', '1995-10-10', 'Andy Warhol', 'Narrative', 'With the spread of global high-speed internet, video clips have become very popular online. By mid-2006 there were tens of millions of video clips available online, with new websites springing up focusing entirely on offering free video clips to users and many established and corporate sites adding the ability to clip existing video content on their websites. Whereas most of this content is non-exclusive and available on competing sites, some companies produce their own videos and do not need to rely on the work of outside companies or amateurs.', 'Elen, Richard. "TV Technology 10. Roll VTR". Archived from the original on 2011-10-27','https://firebasestorage.googleapis.com/v0/b/the-crocodile-project-4158c.appspot.com/o/img8.jpg?alt=media&token=45383a94-e001-4674-8882-77516b64ce7d','https://firebasestorage.googleapis.com/v0/b/the-crocodile-project-4158c.appspot.com/o/img7.jpg?alt=media&token=6fe52c98-907a-4e8d-90a9-3842cba3e8e9','https://firebasestorage.googleapis.com/v0/b/the-crocodile-project-4158c.appspot.com/o/img7.jpg?alt=media&token=6fe52c98-907a-4e8d-90a9-3842cba3e8e9','https://firebasestorage.googleapis.com/v0/b/the-crocodile-project-4158c.appspot.com/o/img4.jpg?alt=media&token=dd0357db-d644-4661-be0e-d160d5fa1876','')
	INSERT INTO CrocodileDB.dbo.Item VALUES ('3', 'qrco.de/bcz1nq', 'Fender Guitar', 'Object', 'Fender Stratocaster', 'Metal', '14.2 lbs', 'Good Condition', '1992-07-01', 'Mark Rothko', 'The Fender Stratocaster, colloquially known as the Strat, is a model of electric guitar designed from 1952 into 1954.The guitar introduced into the popular market several features that were innovative for electric guitars in the mid-1950s. The distinctive body shape, which has become commonplace among electric guitars, was revolutionary for the time period, and for the first time a mass-market electric guitar did not significantly resemble earlier acoustic models. ', 'The double cutaway, elongated horns, and heavily contoured back were all designed for better balance and comfort to play while standing up and slung off the shoulder with a strap. The three-pickup design offered players increased versatility and choice in tone quality over earlier one- and two-pickup electric guitars, and a responsive and simplified vibrato arm integrated into the bridge plate, which marked a significant design improvement over other vibrato system.', '"A Feather in Your Cap: How Women Wore Their Hats, from Marie Antoinette to WWII". March 16, 2010. Retrieved 27 January 2012','https://firebasestorage.googleapis.com/v0/b/the-crocodile-project-4158c.appspot.com/o/img1.jpg?alt=media&token=853c2957-c693-4b49-b2c3-82075484b1ad','https://firebasestorage.googleapis.com/v0/b/the-crocodile-project-4158c.appspot.com/o/img2.jpg?alt=media&token=051872be-a82e-46c2-a742-ba9343a5d16f','https://firebasestorage.googleapis.com/v0/b/the-crocodile-project-4158c.appspot.com/o/img3.jpg?alt=media&token=f2406678-0023-466d-8f3c-6d659483b88d','','')


--Query example to show the table contents
SELECT * 
FROM Item;
