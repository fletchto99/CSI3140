<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="utf-8" indent="yes"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>
                    Nutrition information
                </title>
            </head>
            <body>
                <h1>
                    <xsl:value-of select="product/@name"/>
                    <xsl:text> Nutrition Facts</xsl:text>
                </h1>
                <h3>


                </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount per <xsl:value-of select="product/size"/></th>
                        </tr>
                    </thead>
                    <tr>
                        <td style="text-align: right">Total Calories:</td>
                        <td>
                            <xsl:value-of select="product/calories/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align:right">Fat Calories:</td>
                        <td>
                            <xsl:value-of select="product/calories/fat"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Total fat:</td>
                        <td>
                            <xsl:value-of select="product/fat/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Saturated fat:</td>
                        <td>
                            <xsl:value-of select="product/fat/saturated"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Cholesterol:</td>
                        <td>
                            <xsl:value-of select="product/cholesterol"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Sodium:</td>
                        <td>
                            <xsl:value-of select="product/sodium"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Total carbs:</td>
                        <td>
                            <xsl:value-of select="product/carbohydrates/total"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Fiber carbs:</td>
                        <td>
                            <xsl:value-of select="product/carbohydrates/fiber"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Sugar carbs:</td>
                        <td>
                            <xsl:value-of select="product/carbohydrates/sugars"/>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: right">Protein:</td>
                        <td>
                            <xsl:value-of select="product/protein"/>
                        </td>
                    </tr>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>