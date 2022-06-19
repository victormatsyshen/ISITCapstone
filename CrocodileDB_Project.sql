﻿--Crocodile Startup Database 
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

--Clear the tables 
GO 
CREATE PROC pTruncateTables 
AS 
BEGIN 
	BEGIN TRY 
		TRUNCATE TABLE [CrocodileDB].[dbo].[Item] 
	END TRY 
	BEGIN CATCH 
		PRINT Error_Message() 
	END CATCH 
END;
GO

-- Items Table 
GO 
CREATE PROC pItemTable 
AS 
BEGIN 
	BEGIN TRY
		CREATE TABLE [Item]( 
		 [ItemKey]				 int IDENTITY		NOT NULL 
	    ,[Item_ID]				 int				NOT NULL 
		,[QR_Code]				 nvarchar(25)		NOT NULL					 
	    ,[Item_name]			 nvarchar(25)		NOT NULL 
        ,[Item_type]			 nvarchar(25)		NOT NULL 
        ,[Maker]				 nvarchar(25)		NOT NULL 
	    ,[Material]				 nvarchar(25)		NOT NULL 
        ,[Size_Dimension_Weight] nvarchar(25)	
        ,[Condition]			 nvarchar(25)				 
        ,[Accesion_date]		 date				NOT NULL 
        ,[Collector]			 nvarchar(25)		NOT NULL 
        ,[Item_narrative]		 nvarchar(700)		NOT NULL	 
        ,[Provenance]			 nvarchar(700)				 
        ,[Cross_references]		 nvarchar(700)
		,[Image_url]			 nvarchar(700)
		,[Video_url]			 nvarchar(700)
		PRIMARY KEY (ItemKey)); 
	END TRY 
	BEGIN CATCH 
		PRINT Error_Message() 
	END CATCH 
END 
GO 

 

GO 

CREATE PROC pData 
AS 
BEGIN 
	BEGIN TRY 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('1', 'qrco.de/bcyBr2', 'Drum Head', 'Object', 'Tama', 'Mylar', '25.5 x 25.5 x 2.5 inches', 'Damaged', '04/10/1992', 'Graham Graham', 'Nirvana drummer, Dave Grohl, favored TAMA drumheads in the 1990s.  TAMA is a private musical instruments company founded in 1974 and owned by corporate parent company Hoshino Gakki.  ', 'Original performance video at the origi(if we viewed the original performance video you might be able to add in the above detail – exactly when the drum head was wrecked. Research gold!', 'Original performance video at the original Crocodile Café (if we viewed the original performance video you might be able to add in the above detail – exactly when the drum head was wrecked. Research gold!), additional historic information (SUCH AS?), addition objects in the collection (BE SPECIFIC)','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('2', 'qrco.de/bcz1kK', 'Chest Hair', 'Object', 'Kurt Cobain', 'Hair', '', 'Good Condition', '10/13/1998', 'Lorenzo de Medici', 'Chest hair is hair that grows on the chest of a male in the region between the neck and the abdomen. Chest hair develops during and after puberty along with other types of androgenic hair.', 'Although vellus hair is already present in the area in childhood, chest hair is the terminal hair that develops as an effect of rising levels of androgens (primarily testosterone and its derivatives) due to puberty.', 'Chest hair may occur on each of these areas independent from the others, making for a total of 15 combinations in addition to the apilose (bare) pattern. Hair is said to occur on both the pectoral and circumareolar areas when there is hair around the nipples and on the breast, but these areas are not connected.','','')	
	INSERT INTO CrocodileDB.dbo.Item VALUES ('3', 'qrco.de/bcz1km', 'Microphone', 'Object', 'Sennheiser', 'Metal', '0.72 lb', 'Good Condition', '09/16/2000', 'Sir Thomas Roe', 'A microphone, colloquially called a mic or mike is a transducer that converts sound into an electrical signal. Microphones are used in many applications such as telephones, hearing aids, public address systems for concert halls and public events, motion picture production, live and recorded audio engineering, sound recording, two-way radios, megaphones, and radio and television broadcasting.', 'In order to speak to larger groups of people, a need arose to increase the volume of the human voice. The earliest devices used to achieve this were acoustic megaphones. Some of the first examples, from fifth century BC Greece, were theater masks with horn-shaped mouth openings that acoustically amplified the voice of actors in amphitheaters.', 'Zimmer, Ben (29 July 2010). "How Shoul be Abbreviated?". The New York Times. Retrieved 10 September 2010. Montgomery, Henry C (1959). "Amplification and High Fidelity in the Greek Theater". The Classical Journal. 54 (6): 242–245. JSTOR 3294133','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('4', 'qrco.de/bcz1l2', 'Guitar', 'Object', 'Chapman', 'Metal', '8.9 pounds', 'Damaged', '11/10/1998', 'Napoleon Bonaparte', 'The guitar is a fretted musical instrument that typically has six strings. It is usually held flat against the players body and played by strumming or plucking the strings with the dominant hand, while simultaneously pressing selected strings against frets with the fingers of the opposite hand.', 'The modern word guitar, and its antecedents, has been applied to a wide variety of chordophones since classical times and as such causes confusion. The English word guitar, the German Gitarre, and the French guitare were all adopted from the Spanish guitarra, which comes from the Andalusian Arabic قيثارة (qīthārah)[6] and the Latin cithara, which in turn came from the Ancient Greek κιθάρα. Kithara appears in the Bible four times, and is usually translated into English as harp.', 'Somogyi, Ervin (January 7, 2011). "Tracking The Steel-String Guitars Evolution, Pt. 1". premierguitar.com. Premier Guitar Magazine. Retrieved February 27, 2021','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('5', 'qrco.de/bcz1lA', 'Photo', 'Photo', 'Tama', 'Plain paper', '4 x 6 inches', 'Damaged', '01/31/1990', 'Sir William Hamilton', 'A photograph (also known as a photo, image, or picture) is an image created by light falling on a photosensitive surface, usually photographic film or an electronic image sensor, such as a CCD or a CMOS chip. Most photographs are now created using a smartphone/camera, which uses a lens to focus the scenes visible wavelengths of light into a reproduction of what the human eye would see. The process and practice of creating such images is called photography.', 'Photography is the result of combining several technical discoveries, relating to seeing an image and capturing the image. The discovery of the camera obscura ("dark chamber" in Latin) that provides an image of a scene dates back to ancient China. Greek mathematicians Aristotle and Euclid independently described a camera obscura in the 5th and 4th centuries BCE.', 'Tom Ang (2002). Dictionary of Photography and Digital Imaging: The Essential Reference for the Modern Photographer. Watson-Guptill. ISBN 978-0-8174-3789-3','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('6', 'qrco.de/bcz1li', 'Video', 'Video', 'The Crocodile', '', '120 MB', 'Good Condition', '05/16/1998',  'Richard Payne Knight', 'Video is an electronic medium for the recording, copying, playback, broadcasting, and display of moving visual media.[1] Video was first developed for mechanical television systems, which were quickly replaced by cathode-ray tube (CRT) systems which were later replaced by flat panel displays of several types.', 'Video technology was first developed for mechanical television systems, which were quickly replaced by cathode-ray tube (CRT) television systems, but several new technologies for video display devices have since been invented. Video was originally exclusively a live technology. Charles Ginsburg led an Ampex research team developing one of the first practical video tape recorders (VTR).', 'Video – HiDef Audio and Video. hidefnj.com. Archived from the original on 2017-05-14. Retrieved 2017-03-30.','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('7', 'qrco.de/bcz1ls', 'Guitar', 'Object', 'Tom Anderson', 'Metal', '10 lbs', 'Damaged', '08/23/1991', 'Sir John Soane', 'An electric guitar is a guitar that requires external amplification in order to be heard at typical performance volumes, unlike a standard acoustic guitar (however combinations of the two - a semi-acoustic guitar and an electric acoustic (see below) guitar - exists). It uses one or more pickups to convert the vibration of its strings into electrical signals, which ultimately are reproduced as sound by loudspeakers. ', 'The guitar likely originated in Spain in the early 16th century, deriving from the guitarra latina.[5] Gitterns, (small, plucked guitars) were the first small, guitar-like instruments created during the Spanish Middle Ages with a round back, like that of the lute. Modern guitar-shaped instruments were not seen until the Renaissance era, when the body and size began to take a guitar-like shape.', 'The Structure of the Acoustic Guitar：How a guitar makes sound - Musical Instrument Guide - Yamaha Corporation','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('8', 'qrco.de/bcz1m5', 'Bass', 'Object', 'Framus', 'Metal', '8.2 lbs', 'Good Condition', '09/10/1989', 'The Torlonia Family', 'A bass musical instrument produces tones in the low-pitched range C4- C2. Basses belong to different families of instruments and can cover a wide range of musical roles. Since producing low pitches usually requires a long air column or string, the string and wind bass instruments are usually the largest instruments in their families or instrument classes. As seen in the musical instrument classification article, categorizing instruments can be difficult.', 'Bowed string instruments, primary double bass (usually the instrument referred to as a "bass" in European classical music and jazz, sometimes called a "string bass" to differentiate it from a "brass bass" or "bass horn", or an "upright bass" to differentiate it from a "bass guitar") and to a lesser extent cello from the viol or violin family and violone from viola da gamba family.', 'Walker, James S.; Don, Gary (2013). Mathematics and Music: Composition, Perception, and Performance. Boca Raton, London and New York: CRC Press. p. 35. ISBN 978-1-4822-0850-4.','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('9', 'qrco.de/bcz1mR', 'Drum Sticks', 'Object', 'Fibes Drum Company', 'Carbon fiber', '5A', 'Good Condition', '12/12/1999', 'Steven Cohen', 'A drumstick is a type of percussion mallet used particularly for playing snare drum, drum kit, and some other percussion instruments, and particularly for playing unpitched percussion.', 'The archetypical drumstick is turned from a single piece of wood, most commonly of hickory, less commonly of maple, and least commonly but still in significant numbers, of oak. Drumsticks of the traditional form are also made from metal, carbon fibre, and other modern materials.', 'Learn The Different Types Of Drumsticks - Drum Articles. Rockdrummingsystem.com. Retrieved 19 April 2021','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('10', 'qrco.de/bcz1me', 'Guitar pick', 'Object', 'Tom Anderson', 'Plastic', 'Heavy – 0.80-1.20 mm', 'Damaged', '03/11/1990', 'Francois Pinault', 'A guitar pick (American English) is a plectrum used for guitars. Picks are generally made of one uniform material—such as some kind of plastic (nylon, Delrin, celluloid), rubber, felt, tortoiseshell, wood, metal, glass, tagua, or stone. They are often shaped in an acute isosceles triangle with the two equal corners rounded and the third corner less rounded. They are used to strum chords or to sound individual notes on a guitar.', 'Musicians have used plectra to play stringed instruments for thousands of years. Feather quills were likely the first standardized plectra and became widely used until the late 19th century.', 'Hoover, Will (November 1995). Picks!: The Colorful Saga of Vintage Celluloid Guitar Plectrums. Backbeat Books','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('11', 'qrco.de/bcz1n0', 'Ticket', 'Object', 'The Crocodile', 'Paper', '2 inch x 5.5 inches', 'Damaged', '02/14/1999', 'Charles Saatchi', 'A ticket is a voucher that indicates that an individual is entitled to admission to an event or establishment such as a theatre, amusement park or tourist attraction, or has a right to travel on a vehicle, such as with an airline ticket, bus ticket[1] or train ticket. An individual typically pays for a ticket, but it may be free of charge. A ticket may serve simply as proof of entitlement or reservation.', 'A paper ticket often is perforated so it can be separated into two parts, one (the ticket stub) to be kept by the customer, and one to be kept by the ticket controller. ', 'Rouse, Margaret (October 2020). "Bus ticket booking Software". Software. Veontime. Retrieved 25 October 2020.','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('12', 'qrco.de/bcz1nA', 'Nirvana photo', 'Photo', 'Nirvana', 'Plain paper', '4 x 6 inches', 'Damaged', '06/06/1996', 'Philip Niarchos', 'Nevermind is the second studio album by the American rock band Nirvana, released on September 24, 1991, by DGC Records. It was Nirvanas first release on a major label and the first to feature drummer Dave Grohl. Produced by Butch Vig, Nevermind features a more polished, radio-friendly sound than the bands prior work.[4] Recording took place at Sound City Studios in Van Nuys, California, and Smart Studios in Madison, Wisconsin in May and June 1991, with mastering being completed in August of that year at The Mastering Lab in Hollywood, California.', 'Singer and guitarist Kurt Cobain and bassist Krist Novoselic met while attending Aberdeen High School in Washington state.[2] The pair became friends while frequenting the practice space of the Melvins.[3] Cobain wanted to form a band with Novoselic, but Novoselic did not respond for a long period.', 'Hall, James (September 24, 2016). "Nevermind at 25: how Nirvanas 1991 album changed the cultural landscape". The Telegraph. ISSN 0307-1235. Archived from the original on July 27, 2019. Retrieved December 2, 2019.','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('13', 'qrco.de/bcz1nZ', 'Glass', 'Object', 'Glass', 'Glass', '2.45 lbs', 'Good Condition', '09/27/1992', 'Alberto Giacometti', 'Glass is a non-crystalline, often transparent amorphous solid, that has widespread practical, technological, and decorative use in, for example, window panes, tableware, and optics. Glass is most often formed by rapid cooling (quenching) of the molten form; some glasses such as volcanic glass are naturally occurring. The most familiar, and historically the oldest, types of manufactured glass are "silicate glasses" based on the chemical compound silica (silicon dioxide, or quartz), the primary constituent of sand. Soda-lime glass, containing around 70% silica, accounts for around 90% of manufactured glass. ', 'Glass is an amorphous solid. Although the atomic-scale structure of glass shares characteristics of the structure of a supercooled liquid, glass exhibits all the mechanical properties of a solid.', 'Cusack, N.E. (1987). The physics of structurally disordered matter: an introduction. Adam Hilger in association with the University of Sussex press. p. 13. ISBN 978-0-85274-829-9.','','')	 
	INSERT INTO CrocodileDB.dbo.Item VALUES ('14', 'qrco.de/bcz1nk', 'Short Video', 'Video', 'Billie Eilish', '', '15 MB', 'Damaged', '10/10/1995', 'Andy Warhol', 'With the spread of global high-speed internet, video clips have become very popular online. By mid-2006 there were tens of millions of video clips available online, with new websites springing up focusing entirely on offering free video clips to users and many established and corporate sites adding the ability to clip existing video content on their websites. Whereas most of this content is non-exclusive and available on competing sites, some companies produce their own videos and do not need to rely on the work of outside companies or amateurs.', 'The use of digital techniques in video created digital video. It could not initially compete with analog video, due to early digital uncompressed video requiring impractically high bitrates. Practical digital video was made possible with discrete cosine transform (DCT) coding, a lossy compression process developed in the early 1970s.', 'Elen, Richard. "TV Technology 10. Roll VTR". Archived from the original on 2011-10-27','','')
	INSERT INTO CrocodileDB.dbo.Item VALUES ('15', 'qrco.de/bcz1nq', 'Headband', 'Object', 'Nike', 'Fabric', '2 x 6.7 inches', 'Good Condition', '07/01/1992', 'Mark Rothko', 'A headband is a clothing accessory worn in the hair or around the forehead, usually to hold hair away from the face or eyes. Headbands generally consist of a loop of elastic material or a horseshoe-shaped piece of flexible plastic or metal. They come in assorted shapes and sizes and are used for both fashion and practical or utilitarian purposes.', 'The beginning of headbands was no later than around 475 BC to 330 BC, with the ancient Greeks, who wore hair wreaths. The Greeks and Romans wore these pieces for very special occasions or an important event. Cultures such as the Etruscans and Romans started to decorate their wreaths with jewels made up of gold and silver.', '"A Feather in Your Cap: How Women Wore Their Hats, from Marie Antoinette to WWII". March 16, 2010. Retrieved 27 January 2012','','')	
	END TRY 
	BEGIN CATCH 
		PRINT Error_Message() 
	END CATCH 
END; 
GO 

CREATE PROC CustomerTable
AS
BEGIN
	BEGIN TRY
		CREATE TABLE [Customers](
			[CustomerKey]	int IDENTITY	NOT NULL
		   ,[First_name]	nvarchar(25)	NOT NULL
		   ,[Last_name]		nvarchar(25)	NOT NULL
		   ,[Email]			nvarchar(50)	NOT NULL
		   ,[Password]		nvarchar(25)	NOT NULL
			PRIMARY KEY (CustomerKey));
	END TRY
	BEGIN CATCH
		PRINT Error_message()
	END CATCH
END
GO

EXEC pTruncateTables; 
EXEC pItemTable; 
EXEC pData; 
EXEC CustomerTable;

 

SELECT * 
FROM Item;

SELECT * 
FROM Customers;