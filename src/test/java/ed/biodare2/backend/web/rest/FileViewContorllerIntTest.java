/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ed.biodare2.backend.web.rest;

import com.fasterxml.jackson.core.type.TypeReference;
import ed.biodare2.SimpleRepoTestConfig;
import ed.biodare2.backend.handlers.FileUploadHandler;
import ed.biodare2.backend.handlers.UploadFileInfo;
import ed.biodare2.backend.repo.isa_dom.dataimport.ImportFormat;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.junit.Assert.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.context.junit4.SpringRunner;


/**
 *
 * @author tzielins
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Import(SimpleRepoTestConfig.class)
public class FileViewContorllerIntTest extends AbstractIntTestBase {
 

    
    final String serviceRoot = "/api/file";
    
    @Autowired
    FileUploadHandler handler;

    UploadFileInfo uploaded;
    
    @Before
    @Override
    public void setUp() throws Exception {
    
        super.setUp();
        
        
        /*InputStream in = this.getClass().getResourceAsStream("data-sheet.xlsx");
        MockMultipartFile upload = new MockMultipartFile("file", "original", "text", in);
        uploaded = handler.save(upload, currentUser);
        */
        
        uploaded = upload("data-sheet.xlsx");
    }
    
    protected UploadFileInfo upload(String resName) throws IOException {
        InputStream in = this.getClass().getResourceAsStream(resName);
        MockMultipartFile upload = new MockMultipartFile("file", "original", "text", in);

        return handler.save(upload, currentUser);        
    }
    
    
    
    @Test
    public void getSimpleTableViewWorksOnExcel() throws Exception {

        
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get(serviceRoot+"/"+uploaded.id+"/view/simpletable")
                .accept(APPLICATION_JSON_UTF8)
                .with(mockAuthentication);

        MvcResult resp = mockMvc.perform(builder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(APPLICATION_JSON_UTF8))
                .andReturn();

        assertNotNull(resp);
        //System.out.println("DataView JSON: "+resp.getResponse().getStatus()+"; "+ resp.getResponse().getErrorMessage()+"; "+resp.getResponse().getContentAsString());
        
        ListWrapper<List<String>> wrapper = mapper.readValue(resp.getResponse().getContentAsString(), new TypeReference<ListWrapper<List<String>>>() { });
        assertNotNull(wrapper);
        List<List<String>> table = wrapper.data; //mapper.readValue(resp.getResponse().getContentAsString(), List.class);
        assertNotNull(table);
        
        assertEquals(25,table.size());
        
        
    }
    
    @Test
    public void getSimpleTableViewWorksOnTopCount() throws Exception {

        //ImportFormat format = ImportFormat.TOPCOUNT;
        uploaded = upload("col1609.zip");        
        
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get(serviceRoot+"/"+uploaded.id+"/view/simpletable")
                .accept(APPLICATION_JSON_UTF8)
                .with(mockAuthentication);

        MvcResult resp = mockMvc.perform(builder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(APPLICATION_JSON_UTF8))
                .andReturn();

        assertNotNull(resp);
        //System.out.println("DataView JSON: "+resp.getResponse().getStatus()+"; "+ resp.getResponse().getErrorMessage()+"; "+resp.getResponse().getContentAsString());
        
        ListWrapper<List<String>> wrapper = mapper.readValue(resp.getResponse().getContentAsString(), new TypeReference<ListWrapper<List<String>>>() { });
        assertNotNull(wrapper);
        List<List<String>> table = wrapper.data; //mapper.readValue(resp.getResponse().getContentAsString(), List.class);
        assertNotNull(table);
        
        assertEquals(25,table.size());
        assertEquals(96,table.get(0).size());
        
        
    }
    
    @Test
    public void getSimpleTableViewGivesHandlingExceptionOnNonRecognizedFile() throws Exception {

        
        //InputStream in = this.getClass().getResourceAsStream("signs.csv");
        //MockMultipartFile upload = new MockMultipartFile("file", "original", "text", in);

        uploaded = upload("signs.csv");
        
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get(serviceRoot+"/"+uploaded.id+"/view/simpletable")
                .accept(APPLICATION_JSON_UTF8)
                .with(mockAuthentication);

        MvcResult resp = mockMvc.perform(builder)
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                //.andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(APPLICATION_JSON_UTF8))
                .andReturn();

        assertNotNull(resp);
        //System.out.println("DataView ERROR JSON: "+resp.getResponse().getStatus()+"; "+ resp.getResponse().getErrorMessage()+"; "+resp.getResponse().getContentAsString());
        
        
        
    }    
    
    @Test
    public void verifyGivesTrueOnValidExcelFile() throws Exception {

        ImportFormat format = ImportFormat.EXCEL_TABLE;
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get(serviceRoot+"/"+uploaded.id+"/verify/format/"+format.name())
                .accept(APPLICATION_JSON_UTF8)
                .with(mockAuthentication);

        MvcResult resp = mockMvc.perform(builder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(APPLICATION_JSON_UTF8))
                .andReturn();

        assertNotNull(resp);
        //System.out.println("Verify JSON: "+resp.getResponse().getStatus()+"; "+ resp.getResponse().getErrorMessage()+"; "+resp.getResponse().getContentAsString());
        
        assertEquals("true",resp.getResponse().getContentAsString());
                
    }   
    
    @Test
    public void verifyGivesTrueOnValidTopcountFile() throws Exception {

        ImportFormat format = ImportFormat.TOPCOUNT;
        uploaded = upload("col1609.zip");
        
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get(serviceRoot+"/"+uploaded.id+"/verify/format/"+format.name())
                .accept(APPLICATION_JSON_UTF8)
                .with(mockAuthentication);

        MvcResult resp = mockMvc.perform(builder)
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(APPLICATION_JSON_UTF8))
                .andReturn();

        assertNotNull(resp);
        //System.out.println("Verify JSON: "+resp.getResponse().getStatus()+"; "+ resp.getResponse().getErrorMessage()+"; "+resp.getResponse().getContentAsString());
        
        assertEquals("true",resp.getResponse().getContentAsString());
                
    }   
    
    
    @Test
    public void verifyGivesBadRequestOnInvalidExcelFile() throws Exception {

        ImportFormat format = ImportFormat.EXCEL_TABLE;
        
        //InputStream in = this.getClass().getResourceAsStream("signs.csv");
        //MockMultipartFile upload = new MockMultipartFile("file", "original", "text", in);
        //uploaded = handler.save(upload, currentUser);
        uploaded = upload("signs.csv");
        
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get(serviceRoot+"/"+uploaded.id+"/verify/format/"+format.name())
                .accept(APPLICATION_JSON_UTF8)
                .with(mockAuthentication);

        MvcResult resp = mockMvc.perform(builder)
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                //.andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith(APPLICATION_JSON_UTF8))
                .andReturn();

        assertNotNull(resp);
        System.out.println("Verify JSON: "+resp.getResponse().getStatus()+"; "+ resp.getResponse().getErrorMessage()+"; "+resp.getResponse().getContentAsString());
        
        //assertEquals("true",resp.getResponse().getContentAsString());
        
        
    }     
}
