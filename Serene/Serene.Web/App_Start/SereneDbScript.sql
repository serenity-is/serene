CREATE TABLE [dbo].[Languages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [nvarchar](10) NOT NULL,
	[LanguageName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

INSERT INTO [dbo].[Languages] ([LanguageId] ,[LanguageName]) VALUES ('en', 'English');
INSERT INTO [dbo].[Languages] ([LanguageId] ,[LanguageName]) VALUES ('ru', 'Russian');
INSERT INTO [dbo].[Languages] ([LanguageId] ,[LanguageName]) VALUES ('es', 'Spanish');
INSERT INTO [dbo].[Languages] ([LanguageId] ,[LanguageName]) VALUES ('tr', 'Turkish');